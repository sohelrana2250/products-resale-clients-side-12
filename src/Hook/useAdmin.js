import { useEffect, useState } from "react"

const useAdmin = (email) => {

    //alert(email)

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        fetch(`http://localhost:5010/users/admin/${email}`).then((res) => res.json()).then((data) => {

            console.log(data);
            setIsAdmin(data.Admin);
        }).catch((error) => {
            console.log(error.message);
        })


    }, [email])

    //alert(isAdmin);

    //console.log(isAdmin)

    return [isAdmin]





}

export default useAdmin