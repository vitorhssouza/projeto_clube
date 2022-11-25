-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Clubes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Clubes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Clubes` DEFAULT CHARACTER SET utf8 ;
USE `Clubes` ;

-- -----------------------------------------------------
-- Table `Clubes`.`associados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`associados` (
  `id_associados` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `sobrenome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(16) NOT NULL,
  `setor` VARCHAR(100) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `logadouro` VARCHAR(200) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  `estado` CHAR(2) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
  `situacao` VARCHAR(45) NULL,
  PRIMARY KEY (`id_associados`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`graus_parentesco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`graus_parentesco` (
  `id_graus_parentesco` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_graus_parentesco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`dependentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`dependentes` (
  `id_dependentes` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `sobrenome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `id_associados` INT NOT NULL,
  `id_graus_parentesco` INT NOT NULL,
  PRIMARY KEY (`id_dependentes`),
  INDEX `fk_dependentes_1_idx` (`id_associados` ASC) VISIBLE,
  INDEX `fk_dependentes_graus_parentesco1_idx` (`id_graus_parentesco` ASC) VISIBLE,
  CONSTRAINT `fk_dependentes_1`
    FOREIGN KEY (`id_associados`)
    REFERENCES `Clubes`.`associados` (`id_associados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dependentes_graus_parentesco1`
    FOREIGN KEY (`id_graus_parentesco`)
    REFERENCES `Clubes`.`graus_parentesco` (`id_graus_parentesco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`areas_comuns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`areas_comuns` (
  `id_areas_comuns` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_areas_comuns`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`agendamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`agendamento` (
  `id_agendamento` INT NOT NULL,
  `id_associados` INT NOT NULL,
  `id_areas_comuns` INT NOT NULL,
  `data` DATE NOT NULL,
  PRIMARY KEY (`id_agendamento`, `id_associados`, `id_areas_comuns`),
  INDEX `fk_areas_comuns_has_associados_associados1_idx` (`id_associados` ASC) VISIBLE,
  INDEX `fk_areas_comuns_has_associados_areas_comuns1_idx` (`id_areas_comuns` ASC) VISIBLE,
  CONSTRAINT `fk_areas_comuns_has_associados_areas_comuns1`
    FOREIGN KEY (`id_areas_comuns`)
    REFERENCES `Clubes`.`areas_comuns` (`id_areas_comuns`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_areas_comuns_has_associados_associados1`
    FOREIGN KEY (`id_associados`)
    REFERENCES `Clubes`.`associados` (`id_associados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`itens_areas_comuns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`itens_areas_comuns` (
  `id_itens_areas_comuns` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `quantidade` INT NOT NULL,
  `id_areas_comuns` INT NOT NULL,
  PRIMARY KEY (`id_itens_areas_comuns`),
  INDEX `fk_itens_areas_comuns_1_idx` (`id_areas_comuns` ASC) VISIBLE,
  CONSTRAINT `fk_itens_areas_comuns_1`
    FOREIGN KEY (`id_areas_comuns`)
    REFERENCES `Clubes`.`areas_comuns` (`id_areas_comuns`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`administradores` (
  `id_administradores` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `sobrenome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id_administradores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clubes`.`analise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clubes`.`analise` (
  `id_administradores` INT NOT NULL,
  `id_associados` INT NOT NULL,
  `pendente` VARCHAR(45) NULL,
  PRIMARY KEY (`id_administradores`, `id_associados`),
  INDEX `fk_solicitacao_has_administradores_administradores1_idx` (`id_administradores` ASC) VISIBLE,
  INDEX `fk_analise_associados1_idx` (`id_associados` ASC) VISIBLE,
  CONSTRAINT `fk_solicitacao_has_administradores_administradores1`
    FOREIGN KEY (`id_administradores`)
    REFERENCES `Clubes`.`administradores` (`id_administradores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_analise_associados1`
    FOREIGN KEY (`id_associados`)
    REFERENCES `Clubes`.`associados` (`id_associados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;