import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import "../stylesheets/scrollWatcher.css";

const ScrollWatcher = () => {
    return (
        <a href="#top" className="scroll_watcher_btn fixed bottom-10 right-5">
            <div className="scroll_watcher">
                <div className="bg-black flex justify-center items-center">
                    <KeyboardDoubleArrowUp />
                </div>
            </div>
        </a>
    )
}

export default ScrollWatcher;