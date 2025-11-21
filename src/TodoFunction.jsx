import React from "react";
import { useForm } from "react-hook-form";


export default function TodoFunction() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    return (
        <>
            <div className="container-lg mt-1 mb-5">
                <div className="p-2 border border-2 border-secondary-subtle bg-greengray rounded-1 shadow-sm">

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="row g-3">
                            <div className="col">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task title"
                                    {...register("title", { required: "Title is required" })}
                                />
                                {errors.title && (
                                    <div className="text-danger small">{errors.title.message}</div>
                                )}

                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col">
                                <label className="form-label mt-3">Description</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Enter task description"
                                    {...register("description", { required: "Description is required" })}
                                />
                                {errors.description && (
                                    <div className="text-danger small">{errors.description.message}</div>
                                )}

                            </div>
                        </div>

                        <div className="row g-3 align-items-end">
                            <div className="col-md-6">
                                <label className="form-label mt-3">Due Date</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    {...register("dueDate", {
                                        required: "Due date is required",
                                        validate: (value) => {
                                            const selected = new Date(value);
                                            const now = new Date();

                                            // 1 hour from now
                                            const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

                                            if (selected < oneHourFromNow) {
                                                return "Due date must be at least 1 hour in the future";
                                            }

                                            return true;
                                        },
                                    })}
                                />
                                {errors.dueDate && (
                                    <div className="text-danger small">{errors.dueDate.message}</div>
                                )}

                            </div>

                            <div className="col-md-6">
                                <label className="form-label mt-3">Assign to Person (Optional)</label>
                                <select
                                    className="form-select"
                                    defaultValue=""
                                    {...register("assignee")}>

                                    <option value="" disabled>
                                        -- Select Person (Optional) --
                                    </option>
                                    <option>Frankenstein</option>
                                    <option>Imhotep</option>
                                    <option>Vlad the Impaler</option>
                                    <option>The Wolf Man</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-3 mt-3">
                            <div className="col">
                                <p className="mb-2 fw-semibold">Attachments</p>
                                <div className="input-group">
                                    <input
                                        type="file"
                                        className="form-control"
                                        multiple
                                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
                                        disabled
                                    />
                                    <button className="btn btn-outline-secondary" type="button" disabled>
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3 mt-4">
                            <div className="col">
                                <div
                                    className="border border-2 border-secondary-subtle rounded-1 p-3 bg-white"
                                    style={{ minHeight: 100 }}
                                >

                                </div>
                            </div>
                        </div>

                        <div className="row g-3 mt-3">
                            <div className="col text-end">
                                <button type="submit" className="btn btn-primary">
                                    + Add Todo
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-lg mt-5 mb-3">
                <div className="p-2 border border-1 border-secondary-subtle bg-greengray rounded-top-1 shadow-sm">
                    <div className="d-flex justify-content-between align-items-center px-3 py-2">
                        <h5 className="mb-0 fw-semibold">Todos</h5>
                        <div className="btn-group" role="group" aria-label="Todo controls">
                            <button
                                type="button"
                                className="btn btn-outline-secondary bg-white d-flex align-items-center justify-content-center p-2"
                                style={{ width: 38, height: 38 }}
                            >
                                <i className="bi bi-funnel fs-5"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary bg-white d-flex align-items-center justify-content-center p-2"
                                style={{ width: 38, height: 38 }}
                            >
                                <i className="bi bi-sort-down fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-2 border-start border-end border-bottom border-1 border-secondary-subtle bg-greengray rounded-bottom-1 shadow-sm">
                    <div className="p-3 border border-1 border-secondary-subtle bg-white rounded-1 mb-2">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h6 className="fw-semibold mb-1">Example Todo</h6>
                                <p className="text-muted mb-2">Description goes here</p>
                                <div className="d-flex flex-wrap align-items-center gap-2">
                  <span className="text-muted">
                    <i className="bi bi-calendar3 me-1"></i> Due: 2025-07-10
                  </span>
                                    <span className="badge bg-info text-dark d-flex align-items-center">
                    <i className="bi bi-person-fill me-1"></i> John Doe
                  </span>
                                    <span className="badge bg-secondary d-flex align-items-center">
                    <i className="bi bi-paperclip me-1"></i> 2 attachments
                  </span>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-end gap-2">
                                <small className="text-muted">Created: 2025-07-01</small>
                                <div className="btn-group" role="group" aria-label="Task actions">
                                    <button
                                        type="button"
                                        className="btn btn-outline-success p-1"
                                        style={{ width: 36, height: 36 }}
                                    >
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary p-1"
                                        style={{ width: 36, height: 36 }}
                                    >
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger p-1"
                                        style={{ width: 36, height: 36 }}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
