package com.scoutreport.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PlayerReport {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String firstName;
	
	private String lastName;
	
	private int attackNum;
	
	private int defenceNum;
	
	private int physicalNum;
	
	private int techNum;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAttackNum() {
		return attackNum;
	}

	public void setAttackNum(int attackNum) {
		this.attackNum = attackNum;
	}

	public int getDefenceNum() {
		return defenceNum;
	}

	public void setDefenceNum(int defenceNum) {
		this.defenceNum = defenceNum;
	}

	public int getPhysicalNum() {
		return physicalNum;
	}

	public void setPhysicalNum(int physicalNum) {
		this.physicalNum = physicalNum;
	}

	public int getTechNum() {
		return techNum;
	}

	public void setTechNum(int techNum) {
		this.techNum = techNum;
	}
	
}
