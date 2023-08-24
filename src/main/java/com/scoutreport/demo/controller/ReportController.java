package com.scoutreport.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.scoutreport.demo.model.PlayerReport;
import com.scoutreport.demo.repository.RepositoryJPA;


@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {
	
	@Autowired
	private RepositoryJPA repositoryJPA;

	public ReportController(RepositoryJPA repoJPA){
		this.repositoryJPA = repoJPA;
	}
	
	
	@PostMapping("/addreports")
	PlayerReport addPlayerReport(@Validated @RequestBody PlayerReport playerReport) {
		return repositoryJPA.save(playerReport);
	}
	
	@GetMapping("/getreports")
	List<PlayerReport> getReports(){
		return repositoryJPA.findAll();
	}
}