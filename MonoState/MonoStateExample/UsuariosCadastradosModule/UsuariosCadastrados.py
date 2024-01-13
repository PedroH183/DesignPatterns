from MonoState.MonoStateExample.UserModule.User import User

class UsuariosCadastrados:
    """
        Classe que representa a unica forma de se obter os usuarios de um determinado programa

        # vamos ter um static attribute
        # vamos getters and setters
        # MonoState like
    """

    # static attribute
    list_of_users = []

    def __init__( self ):
        return
    
    def getUsers( self ):
        return self.list_of_users
    
    def setUsers( self, new_value ):
        
        if type(new_value) is list:
            self.list_of_users.extend(new_value)
        
        if type(new_value) is User:
            self.list_of_users.append(new_value)

        return True
    
    def __str__(self) -> str:
        users = ""

        for user in self.list_of_users:
            users += str(user)

        return users