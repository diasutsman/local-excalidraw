window.EXCALIDRAW_ASSET_PATH = "node_modules/@excalidraw/excalidraw/dist";
const App = () => {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{
				style: { height: "100dvh", width: "100dvw" },
			},
			React.createElement(ExcalidrawLib.Excalidraw, {
				initialData: {
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
				},
				theme: "dark", // Add this line to enforce dark mode
				autoFocus: true, // Automatically focuses on the canvas
				onChange: (elements) => {
					console.log("Change detected, elements:", elements);
					try {
						localStorage.setItem(
							"excalidraw-drawings",
							JSON.stringify(elements)
						);
						console.log("Successfully saved to localStorage");
					} catch (error) {
						console.error("Error saving scene:", error);
					}
				},
			})
		)
	);
};

// Verify React and ReactDOM are available
console.log("React version:", React.version);
console.log("ReactDOM version:", ReactDOM.version);
console.log("ExcalidrawLib available:", !!ExcalidrawLib);

const excalidrawWrapper = document.getElementById("app");
console.log("Found wrapper element:", excalidrawWrapper);

const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));
