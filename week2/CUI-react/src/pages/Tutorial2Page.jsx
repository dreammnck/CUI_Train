import TableHook from '../components-hook/common/Table';
import ModalHook from '../components-hook/common/Modal';
import { useState } from 'react';


const Tutorial2Page = () => {
  const [items,setitem] = useState([]);
  const [isVisible,setIsvisible] = useState(false);

  const onSubmit = (item) => {
    console.log(item);
  }

  return (<>
  <ModalHook
  visiable = {isVisible}
   onClose = {()=>setIsvisible(false)}
   onConfirm={()=>onSubmit}/>
    <TableHook
    items={items}
    onCreate={()=>setIsvisible(true)}/>
    </>);
};

export default Tutorial2Page;
