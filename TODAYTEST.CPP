#include<iostream>
#include<stdlib.h>
using namespace std;
class Ary{
public:
int size=0,index=0,temp,id=0;
int ar[100];
Ary(int s){
size = s;
}
void searh(){
cout<<"\n Enter the element you want to search";
cin>>temp;
for(int i=0;i<index;i++){
    if(temp == ar[i]){
        cout<<"Value Found at index"<<i;
id=1;
    }
    if(id!=1){
        cout<<"Value not found";
    }
}
}
void insert(){
cout<<"\n Enter a Value to add in array";
cin>>temp;
ar[index]= temp;
index++;
cout<<"Added";
display();
}
void del(){
cout<<"\n Enter the index you wants to delete value";
cin>>id;
for(int i=id;i<index;i++){
ar[i]=ar[i+1];
}
index--;
cout<<"\n Value deleted";
}
void update(){
    display();
cout<<"\nEnter the index number to update value";
cin>>id;
cout<<"\nEnter the value you want to update";
cin>>temp;
ar[id]=temp;
cout<<"new value has been updated";
}
void display(){
    cout<<"\n Your array is: -> \n";
for(int i=0;i<index;i++){
    cout<<"\t"<<ar[i];
}
}
void menu(){
int op;
cout<<"\n\n\n 1.Insert \n 2.Update \n 3.Delete \n 4.Search \n 5.Display \n 6.Exit";
cin>>op;
switch(op){
    case 1: insert();
    break;
    case 2: update();
    break;
    case 3:del();
    break;
    case 4:searh();
    break;
    case 5:display();
    break;
case 6:
cout<<"you exit ";
exit(0);
break;
    default: cout<<"Invalid option";
}
}
};
int main(){
int s;
cout<<"Enter the size of array";
cin>>s;
Ary a(s);
while(true){
a.menu();
}

return 0;
}






