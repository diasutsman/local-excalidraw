import {
	AppState,
	BinaryFiles,
	ExcalidrawInitialDataState,
} from "@excalidraw/excalidraw/types/types";
import dynamic from "next/dynamic";
import "./App.css";
const Excalidraw = dynamic(
	async () => (await import("@excalidraw/excalidraw")).Excalidraw,
	{
		ssr: false,
	}
);
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { useCallback } from "react";

function App() {
	const loadInitialData = useCallback((): ExcalidrawInitialDataState => {
		try {
			const savedData = localStorage.getItem("excalidraw-data");
			if (!savedData) return { elements: [], appState: {}, files: {} };

			const parsedData = JSON.parse(savedData);
			parsedData.appState.collaborators = [];
			return {
				elements: parsedData.elements || [],
				appState: parsedData.appState || {
					collaborators: [],
				},
				files: parsedData.files || {},
			};
		} catch (error) {
			console.error("Error loading data:", error);
			return { elements: [], appState: {}, files: {} };
		}
	}, []);

	const onChange = useCallback(
		(
			elements: readonly ExcalidrawElement[],
			appState: AppState,
			files: BinaryFiles
		) => {
			try {
				const saveData = {
					elements,
					appState, // This includes view position, zoom, and text styles
					files,
				};

				localStorage.setItem("excalidraw-data", JSON.stringify(saveData));
				console.log("Saved successfully");
			} catch (error) {
				console.error("Error saving:", error);
			}
		},
		[]
	);

	return (
		<div style={{ height: "100dvh", width: "100dvw" }}>
			<Excalidraw
				theme="dark"
				autoFocus
				initialData={loadInitialData()}
				onChange={onChange}
			/>
		</div>
	);
}

export default App;
