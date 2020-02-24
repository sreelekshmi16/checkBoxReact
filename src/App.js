import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import './App.css';
// import ModalDisplay from './modalDisplay'
 const list =[
  {
    id:1,
    name : "item1"
  },
  {
    id:2,
    name: "item2"

  },
  {
    id:3,
    name: "item3"
  }
]

 

class App extends Component{

  state = {
    list:list,
    isOpen : false,
    selectedList:[]
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
 checkHandler=(e)=>{
   console.log("dgcfgjfdfcgcgecjvew")
   let{list,selectedList} = this.state
   const{id,value} = e.target;
   console.log("id",id)
   console.log("CHECK")
   const temp = [];
   const index = selectedList.findIndex(item=> item.id === parseInt(id) );
   console.log("index",index)
   if(index === -1){
    const selectitem = list.find(item=> {
      if(item.id === parseInt(id)){
      return item
    }})
    selectedList.push(selectitem);
    console.log("__________selectedllist",selectedList)
   }
   else if(index>=0){
    const temp = selectedList.filter(item => item.id !== parseInt(id))
    selectedList = [...temp]
    console.log("**sliced selectedlist", selectedList)
   }
   this.setState({
    selectedList
  })

 }
 checkTickHandler=(id)=>{
   console.log("TICKINVIDUAL**********",id)
  const{selectedList,list} =this.state
  const item =selectedList.find(item=> {
    if(item.id === id)
    {
    return item
   }
   
 });
 if(item){
   return true
 }
 return false
     
 }
 allCheckHandler=()=>{
   const{list,selectedList} = this.state
   const Ischecked = this.allCheckTickHandler();
    let tempList = [];
console.log("chechk all check",Ischecked)
   if(!Ischecked){
     tempList = list
     console.log("templist*********",tempList)
   }
   else{
    
   tempList = [];
   }
   
   this.setState({
     selectedList : tempList
   })


 }
 allCheckTickHandler=()=>{
  const{list,selectedList} = this.state
  if(list.length === selectedList.length){
    return true
  }
  return false
 }




  render(){
console.log("selected cheklist",this.state.selectedList)

return(
  <div>
      <Button color="danger" onClick={this.toggle}>Click me!!</Button>
      <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Check List</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="select all" id ={100}  value={100}  onChange={this.allCheckHandler} checked={this.allCheckTickHandler()}/> select All
        </Label>
          </FormGroup>
          </Form>
          {this.state.list.map(item=> 
             <div>
            <li key={item.id}  style={{ listStyleType: "none" }}> 
             <Form>
            <FormGroup check >
              <Label check>
                <Input type="checkbox" name="" id ={item.id} value={item.id} onChange={e=>this.checkHandler(e)} checked={this.checkTickHandler(item.id)} /> {item.name}
          </Label>
            </FormGroup>
            </Form>
             </li>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>

)




  }


}

export default App
