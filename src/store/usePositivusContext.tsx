import { createContext, useContext, useState } from "react";

const PostivitusContext = createContext({
  openHeader: false,
  handleToggleHeader: () => {} 
});

export const usePostivitusContext = ()=> useContext(PostivitusContext);

function PostivitusContextAPI({children}:any) {
  
  const [openHeader, setOpenHeader] = useState<boolean>(false);

  const handleToggleHeader = () => {
    setOpenHeader(!openHeader);
  }

  const value:any = {openHeader, handleToggleHeader};

  return(
    <PostivitusContext.Provider value={value}>{children}</PostivitusContext.Provider>
  )
}

export default PostivitusContextAPI;