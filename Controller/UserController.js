import prisma from "../DB/db.config.js";

export const fetchUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            post: {
                select:{
                    title: true,
                }
            }
        }
    });

    return res.json({status: 200, data: users});


}


export const createUser = async (req,res) => {
    console.log("---> inside create user ")
    try{

        const {name, email, password} = req.body;


        const findUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(findUser) {
            return res.json({status:400, message:"Email Already Taken. Please use another one"})

        }

        const newUser = await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        })

        return res.json({status:400, message:"User created"})
    }catch (error) {
        res.json({status:401,message:"Wrong Details, Please contact admin" });
    }


};



// * Show User
export const showUser = async (req,res) => {
    console.log("---> inside show user ")

    const userId = req.params.id
    const user = await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    })

    return res.json({status:200, data:user});
}

// * Update the user
export const updateUser = async (req,res) => {

    const userId = req.params.id
    const {name, email, password} = req.body;

    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name,
            email,
            password,
        }
    })

    return res.json({status:200, message:"User updated successfully" })

}

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
     await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })

    return res.json({status:200, msg:"User deleted"});


}




    // }catch (error) {
    //     res.json({status:401,message:"Create account first" });
    // }

// }


