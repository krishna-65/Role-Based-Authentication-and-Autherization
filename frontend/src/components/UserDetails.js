const userDetails = ({users})=>{
   return( users.map((user,key)=>
        <div key={key} className="bg-[#333] shadow-md p-4 rounded mb-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    ))
}
export default userDetails;