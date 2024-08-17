import React, { useState } from 'react';
import { TbPencilMinus } from 'react-icons/tb';
import { HiOutlineTrash } from 'react-icons/hi';
import useOwnerProjects from './useOwnerProjects';
import Empty from '../../ui/Empty';
import Loading from '../../ui/Loading';
import Modal from '../../ui/Modal';
import CreateProjectForm from './CreateProjectForm';
import {
  truncateText,
  toLocalDateShort,
  toPersianNumbersWithComma,
} from '../../util/utlis';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProject';

const ProjectsTable = () => {
  const { isLoading, projects } = useOwnerProjects();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>زمان تحویل</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td> {project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || '-'}</td>
              <td>
                {project.status === 'OPEN' ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>
                <div className="flex items-center gap-x-4">
                  <>
                    <button onClick={() => setIsEditOpen(true)}>
                      <TbPencilMinus className="w-5 h-5 text-primary-900" />
                    </button>
                    <Modal
                      title={`ویرایش ${project.title}`}
                      open={isEditOpen}
                      onClose={() => setIsEditOpen(false)}
                    >
                      <CreateProjectForm
                        projectToEdit={project}
                        onClose={() => setIsEditOpen(false)}
                      />
                    </Modal>
                  </>
                  <>
                    <button onClick={() => setIsDeleteOpen(true)}>
                      <HiOutlineTrash className="w-5 h-5 text-error" />
                    </button>
                    <Modal
                      title={`حذف ${project.title}`}
                      open={isDeleteOpen}
                      onClose={() => setIsDeleteOpen(false)}
                    >
                      <ConfirmDelete
                        resourceName={project.title}
                        onClose={() => setIsDeleteOpen(false)}
                        onConfirm={() =>
                          removeProject(project._id, {
                            onSuccess: () => setIsDeleteOpen(false),
                          })
                        }
                        disabled={false}
                      />
                    </Modal>
                  </>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
