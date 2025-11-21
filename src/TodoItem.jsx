import React from "react";

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
    const attachmentsCount = todo.attachmentsCount ?? 0;

    return (
        <div
            className="p-3 border border-1 border-secondary-subtle bg-white rounded-1 mb-2"
        >
            <div className="d-flex justify-content-between align-items-start">
                <div><div className="d-flex align-items-center gap-2 mb-1">
                    <h6
                        className={`fw-semibold mb-0 ${
                            todo.completed ? "text-decoration-line-through text-muted" : ""
                        }`}
                    >
                        {todo.title}
                    </h6>

                    {todo.completed && (
                        <span className="badge bg-success">
            DONE
        </span>
                    )}
                </div>


                    <p className="text-muted mb-2">{todo.description}</p>

                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="text-muted">
                            <i className="bi bi-calendar3 me-1"></i>
                            Due: {new Date(todo.dueDate).toLocaleString()}
                        </span>

                        {todo.assignee && (
                            <span className="badge bg-info text-dark d-flex align-items-center">
                                <i className="bi bi-person-fill me-1"></i>
                                {todo.assignee}
                            </span>
                        )}

                        {/* 🔹 This is the attachment badge I was talking about */}
                        <span className="badge bg-secondary d-flex align-items-center">
                            <i className="bi bi-paperclip me-1"></i>
                            {attachmentsCount} attachment{attachmentsCount === 1 ? "" : "s"}
                        </span>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-end gap-2">
                    <small className="text-muted">
                        Created: {todo.createdAt.toLocaleString()}
                    </small>

                    <div className="btn-group" role="group" aria-label="Task actions">
                        <button
                            type="button"
                            className="btn btn-outline-success p-1"
                            style={{ width: 36, height: 36 }}
                            onClick={() => toggleComplete(todo.id)}
                        >
                            <i className="bi bi-check-lg"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-primary p-1"
                            style={{ width: 36, height: 36 }}
                            disabled
                        >
                            <i className="bi bi-pencil"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-danger p-1"
                            style={{ width: 36, height: 36 }}
                            onClick={() => deleteTodo(todo.id)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
