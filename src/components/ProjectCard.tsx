import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number;
  name: string;
  status: string;
  deadline: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
          {project.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Deadline: {project.deadline}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;