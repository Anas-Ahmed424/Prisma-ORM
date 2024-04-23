import prisma from "../DB/db.config.js";

export const fetchLikes = async (req, res) => {
    // const page = Number(req.query.page) || 1
    // const limit = Number(req.query.limit) || 10
    // if(page <= 0){
    //     page = 1
    // }

    // if(limit <= 0 || limit>10){
    //     limit = 10
    // }

    // const skip = (page - 1) * limit;

    const likes = await prisma.post.findMany({
        // skip:skip,
        // take:limit,


        include: {
            comment: {
                include: {
                    user: {
                        select: {
                            name : true,

                        }
                    },
                }
            }
        },
        orderBy : {
            id : "desc",
        },

    // * to get the total posts count




    });

    return res.json({status: 200, data: likes});


}


export const createLike = async (req,res) => {
    const {user_id, post_id} = req.body;

    await prisma.post.update({
        where:{
            id: Number(post_id),

        },
        data:{
            like_count:{
                increment:1
            }

        }
    })


    const newLike = await prisma.like.create({
        data:{
            user_id:Number(user_id),
            post_id: Number(post_id),

        }

    })
        return res.json({status:200, data:newLike, msg:"Like created"})

}


// * Show User
export const showLike = async (req,res) => {
    const postId = req.body.post_id
    console.log(postId, typeof(postId))
    const like = await prisma.like.findMany({
        where:{
            post_id: postId
        }
    })

    return res.json({status:200, data:like, total_count: like.length});
}

// * Update the user
export const updateLike = async (req,res) => {

    const postId = req.params.id
    const {user_id, post_id} = req.body;

    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:{
            user_id, post_id
        }
    })

    return res.json({status:200, message:"Post updated successfully" })

}

export const deleteLike = async (req, res) => {
    const {post_id, user_id } = req.body;

    await prisma.post.update({
        where:{
            id: Number(post_id)

        },
        data:{
            like_count:{
                decrement:1
            }

        }
    })

     await prisma.like.deleteMany({
        where:{
            post_id:post_id,
            user_id:user_id
        }
    })

    return res.json({status:200, msg:"Like deleted successfully"});

}

//* To search the post

export const searchLike = async (req,res) => {
    const query = req.query.q
    const like = await prisma.like.findMany({
        where:{
            description:{
                search:query,



            }
        }
    })
    return res.json({status: 200, data:like})
}