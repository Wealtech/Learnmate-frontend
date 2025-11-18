// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';

// export default function UploadMaterialPage() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [tags, setTags] = useState('');
//   const [file, setFile] = useState(null);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate upload
//     console.log('Uploading', { title, description, tags: tags.split(','), file });
//     router.push('/materials');
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
//       <h2 className="text-2xl mb-4">Upload Material</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">Title</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             value={title} onChange={e => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Description</label>
//           <textarea
//             className="w-full border px-3 py-2 rounded"
//             rows={3}
//             value={description}
//             onChange={e => setDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Tags (comma-separated)</label>
//           <input
//             className="w-full border px-3 py-2 rounded"
//             value={tags} onChange={e => setTags(e.target.value)}
//             placeholder="e.g. math, algebra, pdf"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">File</label>
//           <input
//             type="file"
//             required
//             onChange={e => setFile(e.target.files[0])}
//             className="w-full"
//           />
//         </div>
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// }






// // import Header from '@/components/Layout/header'

// // const page = () => {
// //   return (
// //     <div>
        
// //     </div>
// //   )
// // }

// // export default page

// // app/materials/upload/page.tsx
'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export function UploadMaterialPage() {
  const [formData, setFormData] = useState({
    course: "",
    title: "",
    description: "",
    tags: "",
  });

  const courses = [
    "Computer Science 101",
    "Data Structures",
    "Web Development",
    "Machine Learning",
    "Database Systems",
    "Software Engineering",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Material uploaded successfully!");
    setFormData({ course: "", title: "", description: "", tags: "" });
  };

  return (
    <div className="p-6 max-w-10/10">
      <div className="mb-6">
        <h2 className="text-gray-800 mb-1">Upload Material</h2>
        <p className="text-gray-600">
          Add new course materials for students
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="mt-6 mb-3 ml-2">Material Details</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <Label htmlFor="course">Course Title</Label>

              <Select
                value={formData.course}
                onValueChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>

                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Material Title</Label>
              <Input
                id="title"
                placeholder="Enter material title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter material description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />

                <p className="text-sm text-gray-600 mb-2">
                  Click to upload or drag and drop
                </p>

                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX, PPT, or PPTX (max 10MB)
                </p>

                <Input
                  id="file"
                  type="file"
                  className="mt-4"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Enter tags separated by commas"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
              <p className="text-xs text-gray-500">
                e.g., algorithms, tutorial, lecture notes
              </p>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Upload Material
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default UploadMaterialPage;
