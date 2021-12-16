class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :text
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
