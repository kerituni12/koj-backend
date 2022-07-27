import del from 'del';
import { mkdir } from 'fs/promises';

export default async function saveFolder(folderPath: string) {
  await del(`${folderPath}/*`, { force: true });
  const folderPromises: Array<Promise<string>> = [];
  folderPromises.push(mkdir(`${folderPath}`, { recursive: true }));
  const folders = ['input', 'output'];
  const status = ['show', 'hide'];
  folders.flatMap((d) =>
    status.forEach((v) =>
      folderPromises.push(mkdir(`${folderPath}/${d}/${v}`, { recursive: true })),
    ),
  );

  await Promise.all(folderPromises);
}
