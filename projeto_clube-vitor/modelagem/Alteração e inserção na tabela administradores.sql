alter table administradores add email varchar(50);
alter table administradores add senha varchar(50) not null;

alter table administradores change cpf cpf varchar(16) not null;

select * from administradores;

describe administradores;