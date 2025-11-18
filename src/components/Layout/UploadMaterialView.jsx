// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Textarea } from "./ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Upload } from "lucide-react";
// import { toast } from "sonner@2.0.3";

// export function UploadMaterialView() {
//   const [formData, setFormData] = useState({
//     course: "",
//     title: "",
//     description: "",
//     tags: "",
//   });

//   const courses = [
//     "Computer Science 101",
//     "Data Structures",
//     "Web Development",
//     "Machine Learning",
//     "Database Systems",
//     "Software Engineering",
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Material uploaded successfully!");
//     setFormData({ course: "", title: "", description: "", tags: "" });
//   };

//   return (
//     <div className="p-6 max-w-3xl">
//       <div className="mb-6">
//         <h2 className="text-gray-800 mb-1">Upload Material</h2>
//         <p className="text-gray-600">Add new course materials for students</p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Material Details</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="course">Course Title</Label>
//               <Select
//                 value={formData.course}
//                 onValueChange={(value) =>
//                   setFormData({ ...formData, course: value })
//                 }
//               >
//                 <SelectTrigger id="course">
//                   <SelectValue placeholder="Select a course" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {courses.map((course) => (
//                     <SelectItem key={course} value={course}>
//                       {course}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="title">Material Title</Label>
//               <Input
//                 id="title"
//                 placeholder="Enter material title"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 placeholder="Enter material description"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//                 rows={4}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="file">Upload File</Label>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
//                 <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                 <p className="text-sm text-gray-600 mb-2">
//                   Click to upload or drag and drop
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   PDF, DOC, DOCX, PPT, or PPTX (max 10MB)
//                 </p>
//                 <Input
//                   id="file"
//                   type="file"
//                   className="mt-4"
//                   accept=".pdf,.doc,.docx,.ppt,.pptx"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="tags">Tags</Label>
//               <Input
//                 id="tags"
//                 placeholder="Enter tags separated by commas"
//                 value={formData.tags}
//                 onChange={(e) =>
//                   setFormData({ ...formData, tags: e.target.value })
//                 }
//               />
//               <p className="text-xs text-gray-500">
//                 e.g., algorithms, tutorial, lecture notes
//               </p>
//             </div>

//             <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
//               <Upload className="w-4 h-4 mr-2" />
//               Upload Material
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
