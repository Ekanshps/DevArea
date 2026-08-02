import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'portfolio-projects.json');

function readProjects() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

export async function GET() {
  try {
    const projects = readProjects();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, category, image, result, slug } = body;

    if (!title || !category || !image || !result || !slug) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const projects = readProjects();

    const newProject = {
      id: String(Date.now()),
      title,
      category,
      image,
      result,
      slug,
    };

    projects.push(newProject);
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');

    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to save project' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    const projects = readProjects();
    const updated = projects.filter((p: { id: string }) => p.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
