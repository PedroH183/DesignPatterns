class User:
    """
        Classe que representa cada usuario cadastrado dentro do sistema.
    """
    
    def __init__( self, name ):
        self.name = name

    def getName( self ):
        return self.name

    def __repr__(self) -> str:
        return f"<{self.name}/>"