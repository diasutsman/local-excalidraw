import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import "./App.css";
import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

function App() {
	const initialData: ExcalidrawInitialDataState = {
		elements: (() => {
			try {
				const saved = localStorage.getItem("excalidraw-drawings");
				console.log("Loading initial data:", saved);
				return saved ? JSON.parse(saved) : [];
			} catch (error) {
				console.error("Error loading initial data:", error);
				return [];
			}
		})(),
	};
	const onChange = (elements: readonly ExcalidrawElement[]) => {
		console.log("Change detected, elements:", elements);
		try {
			localStorage.setItem("excalidraw-drawings", JSON.stringify(elements));
			console.log("Successfully saved to localStorage");
		} catch (error) {
			console.error("Error saving scene:", error);
		}
	};
	return (
		<>
			<div style={{ height: "100dvh", width: "100dvw" }}>
				<Excalidraw
					theme="dark"
					autoFocus={true}
					initialData={initialData}
					onChange={onChange}
				/>
			</div>
		</>
	);
}

export default App;
