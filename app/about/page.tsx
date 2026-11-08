
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Networking Fundamentals"," Hardware Troubleshooting", "Python Programming", "Set Up Computer Networks and Servers"
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am an Information Technology student with a strong interest in computers, technology, and problem-solving.
            My journey started in Senior High School, where I developed my knowledge of computer systems, networking,
             and hardware troubleshooting.
          </p>
          <p>
            As I continue my studies at Naga College Foundation, I am improving my skills in programming,
            database management, networking, and cybersecurity. I enjoy learning new technologies, exploring 
            how things work, and challenging myself to gain more knowledge and experience.
          </p>
          <p>
            My goal is to become a skilled IT professional who can use technology to solve problems and create useful solutions. 
            I believe that learning is a continuous process, and I am always willing to improve and grow.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
