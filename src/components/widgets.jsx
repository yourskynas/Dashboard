import { Button } from "./button";
import { WidgetsNames } from "../constants";
import { Widget } from "./widget";
import { useState, useRef, useEffect } from "react";
import { AddedWidget } from "./added-widget";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import { ResizableBox } from 'react-resizable';

const STORAGE_KEY = 'widgets_layout';

const Widgets = ({ onClick }) => {
    const [addedWidgets, setAddedWidgets] = useState([]);
    const [layout, setLayout] = useState([]);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [widgetSizes, setWidgetSizes] = useState({});

    // Загрузка сохраненного состояния при монтировании
    useEffect(() => {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const { savedLayout, savedWidgets, savedSizes } = JSON.parse(savedState);
                setLayout(savedLayout);
                setAddedWidgets(savedWidgets);
                setWidgetSizes(savedSizes);
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        }
    }, []);

    // Сохранение состояния при изменении
    useEffect(() => {
        const stateToSave = {
            savedLayout: layout,
            savedWidgets: addedWidgets,
            savedSizes: widgetSizes
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, [layout, addedWidgets, widgetSizes]);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const handleWidgetToggle = (isAdded, widgetName) => {
        if (!isAdded) {
            setAddedWidgets([...addedWidgets, widgetName]);
            setLayout(prev => [...prev, { 
                i: widgetName, 
                x: 0,
                y: prev.length,
                w: 1, 
                h: 2 
            }]);
            setWidgetSizes(prev => ({
                ...prev,
                [widgetName]: { width: containerWidth / 2, height: 100 }
            }));
        } else {
            setAddedWidgets(addedWidgets.filter(addWidget => addWidget !== widgetName));
            setLayout(layout.filter(item => item.i !== widgetName));
            setWidgetSizes(prev => {
                const newSizes = { ...prev };
                delete newSizes[widgetName];
                return newSizes;
            });
        }
    };

    const handleResize = (widgetName, size) => {
        setWidgetSizes(prev => ({
            ...prev,
            [widgetName]: size
        }));
    };

    const handleClickCancel = () => {
        setAddedWidgets([]);
        setLayout([]);
        setWidgetSizes({});
        localStorage.removeItem(STORAGE_KEY);
        onClick();
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-md pl-6 pr-6 mb-2 flex gap-3">
                <Button onClick={() => handleClickCancel()} classes="bg-[#ebedf0]">Cancel</Button>
                <Button onClick={() => {}}>Save Changes</Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col mb-2" ref={containerRef}>
                <h1 className="font-medium text-gray-700 mb-2">Manage Widgets</h1>
                <div className="grid grid-cols-3 gap-3">
                    {Object.values(WidgetsNames).map((widget) => (
                        <Widget key={widget} onClick={handleWidgetToggle}>{widget}</Widget>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={1}
                    rowHeight={100}
                    width={containerWidth}
                    margin={[0, 20]}
                    onLayoutChange={(newLayout) => setLayout(newLayout)}
                    isDraggable={true}
                    isResizable={true}
                    verticalCompact={true}
                    preventCollision={true}
                >
                    {addedWidgets.map(widgetName => (
                        <div key={widgetName}>
                            <ResizableBox
                                width={widgetSizes[widgetName]?.width || containerWidth}
                                height={widgetSizes[widgetName]?.height || 200}
                                minConstraints={[300, 100]}
                                maxConstraints={[containerWidth, 300]}
                                onResizeStop={(e, data) => handleResize(widgetName, data.size)}
                            >
                                <AddedWidget 
                                    children={widgetName} 
                                    style={{ height: '100%' }}
                                />
                            </ResizableBox>
                        </div>
                    ))}
                </GridLayout>
            </div>
        </>
    )
}

export { Widgets };
