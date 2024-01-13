

from MonoState.MonoStateExample.UserModule import User
from MonoState.MonoStateExample.UsuariosCadastradosModule import UsuariosCadastrados

if __name__ == "__main__":
    
    user_one = User("Pedro")
    user_two = User("John")
    user_tree = User("Gabriel")
    
    list_one_users = UsuariosCadastrados() # monostate
    list_one_users.setUsers([user_one, user_two])
    print(list_one_users)
    
    list_two_users = UsuariosCadastrados() # monostate
    list_two_users.setUsers(user_tree)
    print(list_one_users) # é a mesma que a da linha 14
