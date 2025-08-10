package database

import (
	"example.com/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	conn, err := gorm.Open(mysql.Open("root:root@tcp(localhost:3306)/root?charset=utf8mb4&parseTime=True&loc=Local"), &gorm.Config{})

	if err != nil {
		panic("failed to connect to database: " + err.Error())
	}

	conn.AutoMigrate(&models.User{})

	DB = conn
}
