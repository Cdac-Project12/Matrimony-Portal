package com.matrimony.Entity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Preferences extends BaseEntity {
	private int minAge;
	private int maxAge;
	private String preferredLocation;
	private String preferredReligion;
	private String preferredCaste;
	private String preferredEducation;
	private String preferredOccupation;

	@OneToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user; 

}
