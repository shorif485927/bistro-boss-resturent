import { useEffect, useState } from "react";


const UseMenu = () => {
          const [loading , setLoading] = useState(true);
          const [menu , setMenu]  = useState([])
          useEffect(() => {
            fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                    setLoading(false)
                        setMenu(data)
            })
            .catch(err => console.log(err))
    },[])

    return (
     [menu,loading]
    )
};

export default UseMenu;