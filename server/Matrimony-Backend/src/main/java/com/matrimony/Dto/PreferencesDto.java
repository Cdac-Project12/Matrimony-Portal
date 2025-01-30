package com.matrimony.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PreferencesDto extends BaseDto{
	private int minAge;
	private int maxAge;
	private String preferredLocation;
	private String preferredReligion;
	private String preferredCaste;
	private String preferredEducation;
	private String preferredOccupation;

}
