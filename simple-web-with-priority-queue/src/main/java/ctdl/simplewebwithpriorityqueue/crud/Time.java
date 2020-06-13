package ctdl.simplewebwithpriorityqueue.crud;

import java.time.LocalTime;
import java.time.Month;
import java.time.Year;

public class Time implements Comparable{
    private int day;
    private Month month;
    private LocalTime localtime;
    private Year year;

    public Time() {

    }
    public Time(int day, Month month,Year year, LocalTime localtime) {
	this.day = day;
	this.month = month;
	this.year = year;
	this.localtime = localtime;
    }

    public Year getYear() {
	return year;
    }

    public void setYear(Year year) {
	this.year = year;
    }


    public int getDay() {
	return day;
    }

    public void setDay(int day) {
	this.day = day;
    }

    public Month getMonth() {
	return month;
    }

    public void setMonth(Month month) {
	this.month = month;
    }

    public LocalTime getLocaltime() {
	return localtime;
    }

    public void setLocaltime(LocalTime localtime) {
	this.localtime = localtime;
    }

    @Override
    public String toString() {
	return localtime.getHour() + ":" + localtime.getMinute() + ":" + localtime.getSecond() + " " + day + " " + month + " " + year;
    }
    @Override
    public int compareTo(Object o) {
	// TODO Auto-generated method stub
	return 0;
    }
}
