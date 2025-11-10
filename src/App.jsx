import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import TodoFunction from "./TodoFunction.jsx";
import "./App.css";

export default function App() {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar runs from very top to bottom */}
            <Sidebar />

            {/* Right column: header on top, content below */}
            <div className="flex-grow-1 d-flex flex-column">
                <Header />
                <main className="flex-grow-1 p-4">
                    <TodoFunction />
                </main>
            </div>
        </div>
    );
}


