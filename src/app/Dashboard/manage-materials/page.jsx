// // app/materials/page.tsx
// 'use client';

// import React from 'react'
// import { useState } from 'react';
// import Link from 'next/link';
// import { Trash2, Edit } from 'lucide-react';
// import { ConfirmDeleteDialog } from '@/components/ui/dialog'; // or inline code

// export default function MaterialsPage() {
//   // Dummy materials list
//   const [materials, setMaterials] = useState([
//     { id: 1, title: 'Linear Algebra Notes', tags: ['Math', 'PDF'] },
//     { id: 2, title: 'Physics Lab Guide', tags: ['Science', 'PDF'] },
//   ]);

//   const handleDelete = (id) => {
//     // Simulate delete
//     setMaterials(curr => curr.filter(m => m.id !== id));
//     console.log('Deleted material', id);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl mb-4">Manage Materials</h2>
//         <Link href="/materials/upload">
//           <button className="px-4 py-2 bg-green-500 text-white rounded">+ Upload</button>
//         </Link>
//       </div>
//       <table className="min-w-full bg-white shadow rounded">
//         <thead>
//           <tr className="border-b">
//             <th className="px-4 py-2 text-left">Title</th>
//             <th className="px-4 py-2 text-left">Tags</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {materials.map(mat => (
//             <tr key={mat.id} className="border-b hover:bg-gray-50">
//               <td className="px-4 py-2">{mat.title}</td>
//               <td className="px-4 py-2">
//                 {mat.tags.map(tag => (
//                   <span key={tag} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 mr-2 rounded text-xs">
//                     {tag}
//                   </span>
//                 ))}
//               </td>
//               <td className="px-4 py-2 text-center">
//                 <Link href={`/materials/${mat.id}/edit`}>
//                   <Edit className="inline-block cursor-pointer mx-1 text-blue-500"/>
//                 </Link>
//                 <ConfirmDeleteDialog onConfirm={() => handleDelete(mat.id)}>
//                   <Trash2 className="inline-block cursor-pointer mx-1 text-red-500"/>
//                 </ConfirmDeleteDialog>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
'use client';
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [materials, setMaterials] = useState([
    {
      id: "1",
      title: "Introduction to Data Structures",
      course: "Data Structures",
      uploadDate: "2024-11-05",
      downloads: 234,
      status: "active",
    },
    {
      id: "2",
      title: "React Hooks Guide",
      course: "Web Development",
      uploadDate: "2024-11-08",
      downloads: 189,
      status: "active",
    },
    {
      id: "3",
      title: "Database Design Principles",
      course: "Database Systems",
      uploadDate: "2024-11-09",
      downloads: 156,
      status: "active",
    },
    {
      id: "4",
      title: "Machine Learning Fundamentals",
      course: "Machine Learning",
      uploadDate: "2024-11-10",
      downloads: 298,
      status: "active",
    },
    {
      id: "5",
      title: "Software Testing Strategies",
      course: "Software Engineering",
      uploadDate: "2024-11-10",
      downloads: 112,
      status: "draft",
    },
  ]);

  const handleDelete = (id) => {
    setMaterials(materials.filter((m) => m.id !== id));
    toast.success("Material deleted successfully");
  };

  const handleEdit = (id) => {
    toast.info("Edit functionality coming soon");
  };

  const filteredMaterials = materials.filter(
    (material) =>
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-gray-800 mb-1">Manage Materials</h2>
        <p className="text-gray-600">
          View and manage all uploaded course materials
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Downloads</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredMaterials.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                  No materials found
                </TableCell>
              </TableRow>
            ) : (
              filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell>{material.title}</TableCell>

                  <TableCell className="text-gray-600">
                    {material.course}
                  </TableCell>

                  <TableCell className="text-gray-600">
                    {material.uploadDate}
                  </TableCell>

                  <TableCell className="text-gray-600">
                    {material.downloads}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={material.status === "active" ? "default" : "secondary"}
                      className={
                        material.status === "active"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : ""
                      }
                    >
                      {material.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(material.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MaterialsPage;
