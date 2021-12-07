import { createElement, useEffect, useRef } from "react";

import GanttChart from './chart';

export default function Gantt() {
    const ref = useRef<any>();

    useEffect(() => {
        var tasks = [
            {
                id: 'Task 1',
                name: 'Redesign website 1',
                start: '2016-12-28',
                end: '2016-12-31',
                progress: 20,
                dependencies: '',
                custom_class: 'bar-milestone' // optional
            }, {
                id: 'Task 2',
                name: 'Redesign website 2',
                start: '2016-12-28',
                end: '2016-12-31',
                progress: 20,
                dependencies: 'Task 1',
                custom_class: 'bar-milestone' // optional
            }, {
                id: 'Task 3',
                name: 'Redesign website 3',
                start: '2016-12-28',
                end: '2016-12-31',
                progress: 20,
                dependencies: 'Task 2',
                custom_class: 'bar-milestone' // optional
            },
        ]
        //@ts-ignore
        var gantt = new GanttChart(ref.current, tasks);
    }, []);

    return (<div ref={ref}></div>);
}
