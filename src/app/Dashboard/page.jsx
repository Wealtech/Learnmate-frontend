"use client"

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageContainer from '@/components/Layout/PageContainer'
import { File, Video } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { StarFilledIcon } from '@radix-ui/react-icons'



// app/dashboard/page.tsx
export default function DashboardPage() {
  // Dummy stats
  const materialCount = 42;
  const studentCount = 128;
  const downloadCount = 256;

  return (
    <div>
      <PageContainer scrollable={true}>
         <Heading title="Welcome Back, Stanley!" description="Monitor your course materials and student activity" />
      {/* <h2 className="text-2xl mb-6">Dashboard</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg">Materials</h3>
          <p className="text-3xl font-bold">{materialCount}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg">Students</h3>
          <p className="text-3xl font-bold">{studentCount}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg">Downloads</h3>
          <p className="text-3xl font-bold">{downloadCount}</p>
        </div>
      </div>
      </PageContainer>
    </div>
  );
 }
// import { useState } from "react";
// import { AdminSidebar } from "./components/AdminSidebar";
// import { AdminTopBar } from "./components/AdminTopBar";
// import { DashboardView } from "./components/DashboardView";
// import { UploadMaterialView } from "./components/UploadMaterialView";
// import { ManageMaterialsView } from "./components/ManageMaterialsView";
// import { Toaster } from "./components/ui/sonner";

// export default function App() {
//   const [activeView, setActiveView] = useState("dashboard");

//   const renderView = () => {
//     switch (activeView) {
//       case "dashboard":
//         return <DashboardView />;
//       case "upload":
//         return <UploadMaterialView />;
//       case "manage":
//         return <ManageMaterialsView />;
//       case "analytics":
//         return (
//           <div className="p-6">
//             <div className="mb-6">
//               <h2 className="text-gray-800 mb-1">Analytics</h2>
//               <p className="text-gray-600">Track material performance and student engagement</p>
//             </div>
//             <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
//               <p className="text-gray-500">Analytics view coming soon...</p>
//             </div>
//           </div>
//         );
//       default:
//         return <DashboardView />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <AdminSidebar activeView={activeView} onViewChange={setActiveView} />
      
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <AdminTopBar adminName="Sarah Johnson" />
        
//         <main className="flex-1 overflow-y-auto">
//           {renderView()}
//         </main>
//       </div>

//       <Toaster />
//     </div>
//   );
// }
