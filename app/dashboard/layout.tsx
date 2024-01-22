import SideNav from "../ui/dashboard/sidenav"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            {/* <h1 className="text-3xl  text-gray-900 w-full ">Dashboard Layout</h1> */}
            
            <div className="w-full flex-none md:w-64">
            <SideNav/>

            </div>
            {children}
         </div>
         

         
        </>
    )
}