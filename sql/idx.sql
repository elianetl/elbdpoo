index publi_idx on perfil using hash (publicacao);

explain select nome_usuario from perfil;

index perfil_idx on publicacao using hash (perfil);

explain select nomeusuario from publicacao;

index public_idx on usuario using hash (publicacao);

explain select nome from usuario;

index usua_idx on publicacao using hash (usuario);

explain select nomeusuario from publicacao;