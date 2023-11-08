import Link from 'next/link';
import { Title } from './Common/Title';
import data from '@/data';

export const Skills = () => (
  <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="skills">
    <Title num={3} title="Tech I use" />
    <div className="flex gap-2 flex-wrap justify-center pt-10">
      {data.skills.map((skill, i) => (
        <span className="bg-white/10 px-2 py-1 rounded-md" key={i}>
          {skill?.href ? (
            <Link href={skill.href}>{skill.name}</Link>
          ) : (
            <span>{skill.name}</span>
          )}
        </span>
      ))}
    </div>
  </div>
);
