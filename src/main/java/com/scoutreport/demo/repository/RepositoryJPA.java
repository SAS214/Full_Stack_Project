package com.scoutreport.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.scoutreport.demo.model.PlayerReport;

@Repository
public interface RepositoryJPA extends JpaRepository<PlayerReport, Long>{
    
}