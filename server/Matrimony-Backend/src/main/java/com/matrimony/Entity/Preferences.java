package com.matrimony.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Preferences extends BaseEntity {
	
	private int age;
	private String Location;
	private String Religion;
	private String Caste;
	private String Education;
	private String Profession;
	private String Gender;
	

	@OneToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user; 

}
