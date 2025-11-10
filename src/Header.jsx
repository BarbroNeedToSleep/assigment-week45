import React from "react";

const Header = () => {
    return (
        <header className="text-dark py-4 mb-4 border-bottom border-2 border-secondary-subtle shadow-sm bg-greengray">

        <div className="container position-relative d-flex align-items-center">

                <h1 className="h4 m-0">Tasks</h1>

                <form
                    className="position-absolute top-50 start-50 translate-middle-x translate-middle-y"
                    role="search"
                    style={{ width: "280px" }}
                >
                    <div className="input-group input-group-sm">
                        <input
                            npm install bootstrap-icons  type="search"
                            className="form-control"
                            placeholder="Search tasks..."
                            aria-label="Search tasks"
                        />

                        <span className="input-group-text">
                        <i className="bi bi-search"></i></span>
                    </div>
                </form>
            </div>
        </header>
    );
};

export default Header;

