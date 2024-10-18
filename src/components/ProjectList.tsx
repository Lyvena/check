import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'In Progress', deadline: '2023-12-15' },
    { id: 2, name: 'Project Beta', status: 'Completed', deadline: '2023-12-10' },
    { id: 3, name: 'Project Gamma', status: 'Pending', deadline: '2023-12-20' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectList;