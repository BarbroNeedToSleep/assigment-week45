import React from "react";

const Sidebar = () => {
    const menuItems = [
        { icon: "bi-grid", label: "" }, // top app icon
        { icon: "bi-speedometer2", label: "Dashboard" },
        { icon: "bi-people", label: "Users" },
        { icon: "bi-list-task", label: "Tasks" },
        { icon: "bi-gear", label: "Settings" },
    ];

    return (
        <aside
            className="bg-greengray border-end d-flex flex-column py-4 min-vh-100"
            style={{ width: "220px" }}>

            <ul className="nav flex-column w-100">
                {menuItems.map((item, i) => (
                    <li key={i} className="nav-item mb-3">
                        <a
                            href="#"
                            className="nav-link d-flex align-items-center text-dark link-opacity-75-hover link-dark"
                        >
                            <i className={`bi ${item.icon} me-3`} style={{ fontSize: "1.2rem" }}></i>
                            <span className="small">{item.label}</span>
                        </a>

                    </li>
                ))}
            </ul>

            <div className="px-3 mt-auto w-100">
                <div className="d-flex flex-column align-items-start">
                    <p className="small mb-2 ms-2">Username</p>
                    <a
                        href="#"
                        className="nav-link d-flex align-items-center text-dark link-dark link-opacity-75-hover p-0 ms-1"
                    >
                        <i className="bi bi-door-closed me-2" style={{ fontSize: "1.2rem" }}></i>
                        <span className="small">Logout</span>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
