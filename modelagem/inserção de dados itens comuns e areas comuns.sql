

-- Inserção de dados na tabela areas comuns
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('1', 'Quiosque 1');
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('2', 'Quiosque 2');
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('3', 'Quiosque 3');
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('4', 'Quiosque 4');
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('5', 'Campo de Futebol');
INSERT INTO `novo_clube`.`areas_comuns` (`id_areas_comuns`, `nome`) VALUES ('6', 'Quadra de futsal');

-- inserção de itens areas comuns
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('1', 'Churrasqueira Alvenaria', '1', '1');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('2', 'Mesas', '5', '1');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('3', 'Cadeiras', '20', '1');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('4', 'Freezer', '1', '1');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('5', 'Churrasqueira Alvenaria', '1', '2');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('6', 'Mesas', '5', '2');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('7', 'Cadeiras', '20', '2');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('8', 'Freezer', '1', '2');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('9', 'Churrasqueira Alvenaria', '1', '3');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('10', 'Mesas', '5', '3');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('11', 'Cadeiras', '20', '3');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('12', 'Freezer', '1', '3');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('13', 'Churrasqueira Alvenaria', '1', '4');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('14', 'Mesas', '5', '4');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('15', 'Cadeiras', '20', '4');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('16', 'Freezer', '1', '4');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('17', 'Bolas', '4', '5');
INSERT INTO `novo_clube`.`itens_areas_comuns` (`id_itens_areas_comuns`, `nome`, `quantidade`, `id_areas_comuns`) VALUES ('18', 'Bolas', '4', '6');

-- Dados admin
INSERT INTO `novo_clube`.`administradores` (`id_administradores`, `nome`, `sobrenome`, `cpf`, `email`, `senha`) VALUES ('1', 'admin', 'admin', 'admin', 'admin@hotmail.com', '123');

-- Inserção graus de parentesco
INSERT INTO `novo_clube`.`graus_parentescos` (`id_graus_parentesco`, `descricao`) VALUES ('14', 'Conjugue');
INSERT INTO `novo_clube`.`graus_parentescos` (`id_graus_parentesco`, `descricao`) VALUES ('15', 'Filho(a)');
