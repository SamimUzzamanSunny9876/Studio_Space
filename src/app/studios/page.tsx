import React from 'react';

const AllStudios = async () => {
    
     const res = await fetch('http://localhost:8000/studios');
     const data = await res.json();

      console.log(data);
    return (
        <div>
             Studios
        </div>
    );
};

export default AllStudios;