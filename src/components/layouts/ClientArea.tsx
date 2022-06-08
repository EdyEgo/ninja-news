interface ClientAreaLayoutProps {
    children:any
}
 
const ClientAreaLayout:  React.FC<ClientAreaLayoutProps> = ({children}:any) => {
    return ( 
    <>
      
       <main>{children}</main>
    </>
     );
}
 
export default ClientAreaLayout;