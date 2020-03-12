import gql from 'graphql-tag'





export const USER_LOGIN = gql`

	mutation($email:String! $password:String! ){

		tokenAuth(email:$email password:$password){

			token
		}
	}



`