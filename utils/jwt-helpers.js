import jwt from 'jsonwebtoken';

function jwtTokens({ name, email, password, post, comment, created_at, user, user_id, title, description, comment_count,
 post_id, }) {
    const users = {  name, email, password, post, comment, created_at, user, user_id, title, description, comment_count,
        post_id, };
    console.log(process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(users,'543ertyuihghjhgfgbngfghgfgbn',{expiresIn:'50m'});
    const refreshToken = jwt.sign(users,'rtyuiugfdfvbnbvfdfghjffghgfdfgg',{expiresIn:'50m'});
    console.log("access token = ",accessToken)
    console.log("refresh token =",refreshToken)
    return ({accessToken,refreshToken});


}

export {jwtTokens};