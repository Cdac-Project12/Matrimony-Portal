package com.matrimony.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PreferencesDto extends BaseDto{
	
	private int age;
	private String Location;
	private String Religion;
	private String Caste;
	private String Education;
	private String Profession;
	private String Gender;

}
